from flask import Flask, render_template, request
import stripe
import configparser

config = configparser.ConfigParser()
config.read('config.ini')
stripe.api_key = config['stripe']['secret']

app = Flask(__name__)


@app.route('/invest', methods=['POST'])
def charge():
    """
    call to
        url = /invest
        body = {"amount":100, "token":"token-from-stripe.js"}
        amount in cents
    return 204 or 500
    """
    data = request.json
    amount = data['amount']
    token = data['token']
    try:
        charged = stripe.Charge.create(
            amount=amount,
            currency="eur",
            description="charge",
            source=token,
        )
        return '', 204
    except Exception as e:
        return 'Could not process payment', 500


if __name__ == '__main__':
    app.run(debug=True)
