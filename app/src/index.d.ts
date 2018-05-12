declare const startQr: (side: number,
                         success: (qr: string) => void,
                         notSupported: (err: string) => void) => void;
declare const stopQr: () => void;
