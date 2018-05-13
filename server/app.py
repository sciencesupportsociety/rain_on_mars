import configparser

import stripe
from flask import Flask, request

config = configparser.ConfigParser()
config.read('config.ini')
stripe.api_key = config['stripe']['secret']
plan_id = config['stripe']['plan']

app = Flask(__name__)


@app.after_request
def apply_caching(resp):
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Headers'] = 'content-type'
    resp.headers['Access-Control-Allow-Methods'] = 'POST'
    return resp


@app.route('/invest', methods=['POST', 'OPTIONS'])
def invest():
    """
    call to
        url = /invest
        body = {"amount":100, "token":"token-from-stripe.js"}
        amount in cents
    return 204 or 500
    """
    if request.method == 'OPTIONS':
        return '', 204
    data = request.json
    amount = data['amount']
    token = data['token']
    try:
        charged = stripe.Charge.create(
            amount=amount * 100,
            currency="eur",
            description="charge",
            source=token,
        )
        return '', 204
    except Exception as e:
        return 'Could not process payment', 500


@app.route('/invest-monthly', methods=['POST', 'OPTIONS'])
def invest_monthly():
    """
    call to
        url = /invest-monthly
        body = {"amount":100, "token":"token-from-stripe.js"}
        amount in cents
    return 204 or 500
    """
    if request.method == 'OPTIONS':
        return '', 204
    data = request.json
    amount = data['amount']
    token = data['token']
    customer = stripe.Customer.create(
        source=token
    )
    try:
        subscription = stripe.Subscription.create(
            customer=customer.id,
            billing='charge_automatically',
            items=[
                {
                    "plan": plan_id,
                    "quantity": int(float(amount) * 100),
                },
            ]
        )
        return '', 204
    except Exception as e:
        return 'Could not process subscription', 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
