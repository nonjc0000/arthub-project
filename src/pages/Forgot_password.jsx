import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

const Forgot_password = () => {
    // 表單狀態
    const [formData, setFormData] = useState({
        email: ''
    });

    // 頁面狀態
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    
    // 重新發送相關狀態
    const [canResend, setCanResend] = useState(false);
    const [countdown, setCountdown] = useState(0);

    // 處理表單輸入變更
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // 清除錯誤訊息
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // 表單驗證
    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = '請輸入電子郵件';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = '請輸入有效的電子郵件格式';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 開始倒數計時
    const startCountdown = () => {
        setCanResend(false);
        setCountdown(60);
    };

    // 倒數計時效果
    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else if (countdown === 0 && isEmailSent) {
            setCanResend(true);
        }

        return () => clearTimeout(timer);
    }, [countdown, isEmailSent]);

    // 處理表單提交
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // 模擬 API 呼叫
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // 成功後的處理
            setIsEmailSent(true);
            startCountdown();
            
        } catch (error) {
            console.error('發送失敗:', error);
            setErrors({ email: '發送失敗，請重試' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // 處理重新發送
    const handleResend = async () => {
        if (!canResend) return;

        try {
            // 模擬重新發送 API
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            startCountdown();
            
        } catch (error) {
            console.error('重新發送失敗:', error);
        }
    };

    return (
        <main className='forgot_password_main'>
            <ScrollToTop/>
            <div className='forgot_password_container'>
                {/* 左側品牌區 */}
                <div className='forgot_left'>
                    <div className='illustration_section'>
                        <div className='forgot_icon'>
                            <img src="./images/icons/key-icon.svg" alt="密鑰圖示" />
                        </div>
                        <h1 className='forgot_title'>忘記密碼？</h1>
                        <p className='forgot_subtitle'>
                            別擔心！我們會幫助您<br />
                            重設密碼
                        </p>
                    </div>
                    <div className='decoration_element'>
                        <img src="./images/decorations/deco-crocodile_thinking.svg" alt="思考鱷魚" />
                    </div>
                </div>

                {/* 右側表單區 */}
                <div className='forgot_right'>
                    <div className='forgot_form_container'>
                        {/* 步驟指示器 */}
                        <div className='step_indicator'>
                            <div className={`step ${!isEmailSent ? 'active' : 'completed'}`}>1</div>
                            <div className={`step_line ${isEmailSent ? 'active' : ''}`}></div>
                            <div className={`step ${isEmailSent ? 'active' : ''}`}>2</div>
                            <div className='step_line'></div>
                            <div className='step'>3</div>
                        </div>

                        <div className='form_header'>
                            <div className='form_title'>重設密碼</div>
                            <p className='form_description'>
                                {!isEmailSent 
                                    ? '請輸入您註冊時使用的電子郵件地址，我們將發送重設密碼的連結到您的信箱。'
                                    : '請檢查您的電子郵件收件匣（包含垃圾郵件資料夾）。'
                                }
                            </p>
                        </div>

                        {/* 成功訊息 */}
                        {isEmailSent && (
                            <div className='success_message'>
                                <strong>郵件已發送！</strong><br />
                                我們已將重設密碼的連結發送到 <strong>{formData.email}</strong>。
                                請檢查您的收件匣（包含垃圾郵件資料夾）。
                            </div>
                        )}

                        {/* 表單 */}
                        {!isEmailSent && (
                            <form className='forgot_form' onSubmit={handleSubmit}>
                                <div className='form_group'>
                                    <label className='form_label' htmlFor="email">電子郵件</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`form_input ${errors.email ? 'error' : ''}`}
                                        placeholder="請輸入您的電子郵件地址"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <div className='error_message'>{errors.email}</div>}
                                </div>

                                <button 
                                    type="submit" 
                                    className={`send_button ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? '發送中...' : '發送重設連結'}
                                </button>
                            </form>
                        )}

                        {/* 重新發送區域 */}
                        {isEmailSent && (
                            <div className='resend_section'>
                                <p className='resend_text'>沒有收到郵件？</p>
                                <button 
                                    className='resend_button'
                                    onClick={handleResend}
                                    disabled={!canResend}
                                >
                                    重新發送
                                </button>
                                {countdown > 0 && (
                                    <p className='timer_text'>請等待 {countdown} 秒後重新發送</p>
                                )}
                            </div>
                        )}

                        <div className='back_to_login'>
                            <Link to="/Member_login">← 返回登入頁面</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Forgot_password