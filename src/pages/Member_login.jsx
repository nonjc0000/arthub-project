import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

const Member_login = () => {
    // 登入表單狀態
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    // 表單驗證狀態
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 處理表單輸入變更
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLoginForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
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

        if (!loginForm.email) {
            newErrors.email = '請輸入電子郵件';
        } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
            newErrors.email = '請輸入有效的電子郵件格式';
        }

        if (!loginForm.password) {
            newErrors.password = '請輸入密碼';
        } else if (loginForm.password.length < 6) {
            newErrors.password = '密碼至少需要6個字元';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 處理表單提交
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // 這裡可以加入實際的登入邏輯
            console.log('登入資料:', loginForm);

            // 模擬 API 呼叫
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 登入成功後的處理
            alert('登入成功！');

        } catch (error) {
            console.error('登入失敗:', error);
            alert('登入失敗，請重試');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className='member_login_main'>
            <ScrollToTop />
            <div className='login_container'>
                {/* 左側品牌區 */}
                <div className='login_left'>
                    <div className='brand_section'>
                        <figure className='logo'>
                            <img src="./images/logo_white.svg" alt="集藝logo" />
                        </figure>
                        <h1 className='welcome_title'>歡迎回來</h1>
                        <p className='welcome_subtitle'>
                            探索美食與生活的無限可能<br />
                            與我們一起創造美好回憶
                        </p>
                    </div>
                </div>

                {/* 右側表單區 */}
                <div className='login_right'>
                    <div className='login_form_container'>
                        <div className='form_header'>
                            <div className='form_title'>會員登入</div>
                            <p className='form_subtitle'>請輸入您的帳號密碼</p>
                        </div>

                        <figure className='decoration_crocodile'>
                            <img src="./images/decorations/deco-raisehand_allegator.svg" alt="揮手鱷魚" />
                        </figure>

                        <form className='login_form' onSubmit={handleSubmit}>
                            <div className='form_group'>
                                <label className='form_label' htmlFor="email">電子郵件</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`form_input ${errors.email ? 'error' : ''}`}
                                    placeholder="請輸入電子郵件"
                                    value={loginForm.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <span className='error_message'>{errors.email}</span>}
                            </div>

                            <div className='form_group'>
                                <label className='form_label' htmlFor="password">密碼</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className={`form_input ${errors.password ? 'error' : ''}`}
                                    placeholder="請輸入密碼"
                                    value={loginForm.password}
                                    onChange={handleInputChange}
                                />
                                {errors.password && <span className='error_message'>{errors.password}</span>}
                            </div>

                            <div className='form_options'>
                                <label className='remember_me'>
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={loginForm.rememberMe}
                                        onChange={handleInputChange}
                                    />
                                    <span className='checkmark'></span>
                                    記住我
                                </label>
                                <Link to="/Forgot_password" className='forgot_password'>
                                    忘記密碼？
                                </Link>
                            </div>


                            <button
                                type="submit"
                                className={`login_button ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? '登入中...' : '登入'}
                            </button>
                        </form>

                        <div className='divider'>
                            <span>或</span>
                        </div>

                        <div className='signup_link'>
                            <span>還沒有帳號？</span>
                            <Link to="/Register">立即註冊</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Member_login