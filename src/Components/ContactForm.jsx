import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const form = useRef();
    const captchaRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
        if (!captchaToken) {
            setStatus('captcha');
            return;
        }

        setIsSubmitting(true);
        setStatus(null);

        try {
            await emailjs.sendForm(
                'service_xcshu3m',
                'template_1d1fwmn',
                form.current,
                'g7xnDloq-u2xeG1a1'
            );
            setStatus('success');
            form.current.reset();
            captchaRef.current.reset();
            setCaptchaToken(null);
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-4 mb-8">
            <div>
                <label className="block font-medium text-gray-700">
                    Nome <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="user_name"
                    required
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Il tuo nome"
                />
            </div>
            <div>
                <label className="block font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="user_email"
                    required
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="La tua email"
                />
            </div>
            <div>
                <label className="block font-medium text-gray-700">
                    Oggetto <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="subject"
                    required
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Oggetto del messaggio"
                />
            </div>
            <div>
                <label className="block font-medium text-gray-700">
                    Messaggio <span className="text-red-500">*</span>
                </label>
                <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Il tuo messaggio"
                />
            </div>

            <div className="text-sm text-text">
                I campi contrassegnati con <span className="text-red-500">*</span> sono obbligatori
            </div>

            <div className="flex justify-center">
                <ReCAPTCHA
                    ref={captchaRef}
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={handleCaptchaChange}
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={isSubmitting || !captchaToken}
                    className="px-12 py-2 text-white bg-primary rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
                >
                {isSubmitting ? 'Invio in corso...' : 'Invia'}
                </button>
            </div>

            {status === 'success' && (
                <p className="text-green-600">Messaggio inviato con successo!</p>
            )}
            {status === 'error' && (
                <p className="text-red-600">Si è verificato un errore. Riprova più tardi.</p>
            )}
            {status === 'captcha' && (
                <p className="text-red-600">Per favore, completa la verifica reCAPTCHA.</p>
            )}
        </form>
    );
};

export default ContactForm; 