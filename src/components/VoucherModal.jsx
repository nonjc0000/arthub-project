const VoucherModal = ({ isOpen, onClose, voucherData }) => {
  if (!isOpen) return null;


  const handlePrint = () => {
    window.print();
  };


  const generateQRCodeSVG = () => {
    return (
      <img src="./images/arthub.png" alt="" />
    );
  };


  return (
    <div className="voucher-modal-overlay" onClick={onClose}>
      <div className="voucher-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* 關閉按鈕 */}
        <button className="voucher-close-button" onClick={onClose}>
          ✕
        </button>


        {/* 憑證卡片 */}
        <div className="voucher-modal-card">
          {/* Header */}
          <div className="voucher-modal-header">
            <div className="logo-section">
              <div className="logo">華山設計選物日</div>
              <div className="subtitle">電子旅遊憑證</div>
            </div>
            <div className="status-badge">已確認</div>
          </div>


          {/* Voucher Number */}
          <div className="voucher-number-section">
            <div className="label">憑證編號</div>
            <div className="voucher-number">{voucherData.voucherNumber}</div>
            <div className="booking-ref">訂單編號: {voucherData.bookingReference}</div>
          </div>


          {/* Main Content */}
          <div className="voucher-content-grid">
            {/* Left Column */}
            <div className="voucher-content-left">
              {/* Travel Info */}
              <section className="info-section">
                <h3 className="section-title">活動資訊</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">活動名稱</span>
                    <span className="info-value">{voucherData.travel.destination}</span>
                  </div>
               
                  <div className="info-item">
                    <span className="info-label">參加日期</span>
                    <span className="info-value">
                      {voucherData.travel.checkInDate} {voucherData.travel.checkInTime}
                    </span>
                  </div>
                 
                  <div className="info-item">
                    <span className="info-label">參加人數</span>
                    <span className="info-value">{voucherData.travel.guests} 位</span>
                  </div>
                </div>
              </section>


              {/* Customer Info */}
              <section className="info-section">
                <h3 className="section-title">旅客資訊</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">姓名</span>
                    <span className="info-value">{voucherData.customer.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">電子郵件</span>
                    <span className="info-value">{voucherData.customer.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">聯絡電話</span>
                    <span className="info-value">{voucherData.customer.phone}</span>
                  </div>
                </div>
              </section>


              {/* Payment Info */}
              <section className="info-section">
                <h3 className="section-title">付款資訊</h3>
                <div className="payment-info">
                  <div className="payment-row">
                    <span>總金額</span>
                    <span className="payment-amount">{voucherData.payment.total}</span>
                  </div>
                  <div className="payment-row">
                    <span>付款狀態</span>
                    <span className="payment-status">{voucherData.payment.status}</span>
                  </div>
                </div>
              </section>
            </div>


            {/* Right Column - QR Code */}
            <div className="voucher-content-right">
              <div className="qr-section">
                <div className="qr-title">電子憑證</div>
                {generateQRCodeSVG()}
                <div className="qr-instruction">請於參加時出示此 QR Code</div>
              </div>
            </div>
          </div>


          {/* Important Notes */}
          <div className="voucher-notes-section">
            <h3 className="section-title">重要事項</h3>
            <ul className="notes-list">
              <li>提醒您請提前15分鐘到場</li>
              <li>如需取消或更改訂單,請於前 3 天聯絡客服</li>
              <li>此憑證為電子憑證,請妥善保存或列印攜帶</li>
            </ul>
          </div>


          {/* Footer */}
          <div className="voucher-modal-footer">
            <div className="footer-info">
              <div>憑證發行時間: {voucherData.issuedAt}</div>
              <div>客服專線: 0800-123-456 | service@travelgo.com</div>
            </div>
            <button className="print-button" onClick={handlePrint}>
              列印憑證
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VoucherModal;

