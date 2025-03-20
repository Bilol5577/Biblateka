let qrCode;

function generateQRCode() {
    const text = document.getElementById('text-input').value;
    const color = document.getElementById('color-input').value;
    const bgColor = document.getElementById('bg-color-input').value;

    if (!text) {
        alert('Please enter text or URL');
        return;
    }

    if (qrCode) {
        document.getElementById('qr-code').innerHTML = '';
    }

    qrCode = new QRCodeStyling({
        width: 200,
        height: 200,
        data: text,
        dotsOptions: {
            color: color,
            type: 'rounded'
        },
        backgroundOptions: {
            color: bgColor
        }
    });

    qrCode.append(document.getElementById('qr-code'));
}
