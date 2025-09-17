import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

const Register = () => {
    // 註冊表單狀態
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthday: '',
        gender: '',
        agreeTerms: false,
        subscribeNewsletter: false
    });

    // 表單驗證狀態
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({ level: 0, text: '密碼強度：弱' });

    // 處理表單輸入變更
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
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

        // 密碼強度檢測
        if (name === 'password') {
            checkPasswordStrength(value);
        }
    };

    // 密碼強度檢測
    const checkPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        let level, text;
        if (strength <= 2) {
            level = 1;
            text = '密碼強度：弱';
        } else if (strength <= 3) {
            level = 2;
            text = '密碼強度：中等';
        } else {
            level = 3;
            text = '密碼強度：強';
        }

        setPasswordStrength({ level, text });
    };

    // 表單驗證
    const validateForm = () => {
        const newErrors = {};

        // 必填欄位驗證
        if (!formData.name) {
            newErrors.name = '請輸入姓名';
        }

        if (!formData.phone) {
            newErrors.phone = '請輸入手機號碼';
        } else if (!/^09\d{8}$/.test(formData.phone)) {
            newErrors.phone = '請輸入有效的手機號碼格式';
        }

        if (!formData.email) {
            newErrors.email = '請輸入電子郵件';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = '請輸入有效的電子郵件格式';
        }

        if (!formData.password) {
            newErrors.password = '請輸入密碼';
        } else if (formData.password.length < 6) {
            newErrors.password = '密碼至少需要6個字元';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = '請確認密碼';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = '密碼確認不一致';
        }

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = '請同意服務條款和隱私政策';
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
            // 這裡可以加入實際的註冊邏輯
            console.log('註冊資料:', formData);
            
            // 模擬 API 呼叫
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // 註冊成功後的處理
            alert('註冊成功！歡迎加入集藝！');
            
        } catch (error) {
            console.error('註冊失敗:', error);
            alert('註冊失敗，請重試');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className='register_main'>
            <ScrollToTop/>
            <div className='register_container'>
                {/* 左側品牌區 */}
                <div className='register_left'>
                    <div className='welcome_section'>
                        <div className='welcome_icon'>
                            <img src="./images/icons/star-icon.svg" alt="星星圖示" />
                        </div>
                        <h1 className='welcome_title'>加入集藝</h1>
                        <p className='welcome_subtitle'>
                            開始您的美食與生活探索之旅<br />
                            與我們一起發現更多精彩
                        </p>
                        
                        <div className='benefit_list'>
                            <div className='benefit_item'>
                                <div className='benefit_icon'>✓</div>
                                <span>專屬會員優惠與活動</span>
                            </div>
                            <div className='benefit_item'>
                                <div className='benefit_icon'>✓</div>
                                <span>個人化推薦與收藏</span>
                            </div>
                            <div className='benefit_item'>
                                <div className='benefit_icon'>✓</div>
                                <span>優先報名熱門活動</span>
                            </div>
                            <div className='benefit_item'>
                                <div className='benefit_icon'>✓</div>
                                <span>會員專屬內容與資訊</span>
                            </div>
                        </div>
                    </div>
                    <div className='decoration_register'>
                        <img src="./images/decorations/deco-crocodile_welcome.svg" alt="歡迎鱷魚" />
                    </div>
                </div>

                {/* 右側表單區 */}
                <div className='register_right'>
                    <div className='register_form_container'>
                        <div className='form_header'>
                            <div className='form_title'>會員註冊</div>
                            <p className='form_subtitle'>請填寫以下資訊完成註冊</p>
                        </div>

                        <form className='register_form' onSubmit={handleSubmit}>
                            <div className='form_row'>
                                <div className='form_group'>
                                    <label className='form_label' htmlFor="name">
                                        姓名 <span className='required'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`form_input ${errors.name ? 'error' : ''}`}
                                        placeholder="請輸入您的姓名"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && <div className='error_message'>{errors.name}</div>}
                                </div>
                                <div className='form_group'>
                                    <label className='form_label' htmlFor="phone">
                                        手機號碼 <span className='required'>*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className={`form_input ${errors.phone ? 'error' : ''}`}
                                        placeholder="請輸入手機號碼"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    {errors.phone && <div className='error_message'>{errors.phone}</div>}
                                </div>
                            </div>

                            <div className='form_group'>
                                <label className='form_label' htmlFor="email">
                                    電子郵件 <span className='required'>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`form_input ${errors.email ? 'error' : ''}`}
                                    placeholder="請輸入電子郵件地址"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <div className='error_message'>{errors.email}</div>}
                            </div>

                            <div className='form_row'>
                                <div className='form_group'>
                                    <label className='form_label' htmlFor="password">
                                        密碼 <span className='required'>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className={`form_input ${errors.password ? 'error' : ''}`}
                                        placeholder="請輸入密碼"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    {formData.password && (
                                        <div className='password_strength'>
                                            <div className='strength_bar'>
                                                <div className={`strength_fill level_${passwordStrength.level}`}></div>
                                            </div>
                                            <div className='strength_text'>{passwordStrength.text}</div>
                                        </div>
                                    )}
                                    {errors.password && <div className='error_message'>{errors.password}</div>}
                                </div>
                                <div className='form_group'>
                                    <label className='form_label' htmlFor="confirmPassword">
                                        確認密碼 <span className='required'>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className={`form_input ${errors.confirmPassword ? 'error' : ''}`}
                                        placeholder="請再次輸入密碼"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                    {errors.confirmPassword && <div className='error_message'>{errors.confirmPassword}</div>}
                                </div>
                            </div>

                            <div className='form_row'>
                                <div className='form_group'>
                                    <label className='form_label' htmlFor="birthday">生日</label>
                                    <input
                                        type="date"
                                        id="birthday"
                                        name="birthday"
                                        className='form_input'
                                        value={formData.birthday}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='form_group'>
                                    <label className='form_label' htmlFor="gender">性別</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        className='form_input'
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">請選擇</option>
                                        <option value="male">男性</option>
                                        <option value="female">女性</option>
                                        <option value="other">其他</option>
                                        <option value="prefer-not-to-say">不願透露</option>
                                    </select>
                                </div>
                            </div>

                            <div className='terms_section'>
                                <div className='checkbox_group'>
                                    <label className='custom_checkbox'>
                                        <input
                                            type="checkbox"
                                            name="agreeTerms"
                                            checked={formData.agreeTerms}
                                            onChange={handleInputChange}
                                        />
                                        <span className='checkmark'></span>
                                        <span className='checkbox_label'>
                                            我已閱讀並同意 <Link to="/terms" className='link_text'>服務條款</Link> 和 <Link to="/privacy" className='link_text'>隱私政策</Link> <span className='required'>*</span>
                                        </span>
                                    </label>
                                    {errors.agreeTerms && <div className='error_message'>{errors.agreeTerms}</div>}
                                </div>

                                <div className='checkbox_group'>
                                    <label className='custom_checkbox'>
                                        <input
                                            type="checkbox"
                                            name="subscribeNewsletter"
                                            checked={formData.subscribeNewsletter}
                                            onChange={handleInputChange}
                                        />
                                        <span className='checkmark'></span>
                                        <span className='checkbox_label'>
                                            我願意接收集藝的最新活動與優惠資訊
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className={`register_button ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? '註冊中...' : '立即註冊'}
                            </button>
                        </form>

                        <div className='divider'>
                            <span>或</span>
                        </div>

                        <div className='login_link'>
                            <span>已經有帳號了？</span>
                            <Link to="/Member_login">立即登入</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register