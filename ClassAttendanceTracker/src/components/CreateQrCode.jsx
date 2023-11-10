import React from 'react'
import QRcode from 'react-qr-code'

export const CreateQrCode = () => {
    return (
        <>
            <div>CreateQrCode</div>
            <QRcode value="https://trello.com/b/iUztGA9y/l%C3%A4sn%C3%A4oloprojekti" />

            <div className="input-here">
                <p>Enter some text here</p>
                <input type="text" />
                <button>to generate QR code</button>
            </div>
        </>
    )
}
