const FormInput = ({ label, placeholder, variant = 'bordered', ...props }) => {
    const baseStyles = 'w-full px-4 py-3 text-base rounded-xs transition-all outline-none bg-black text-[#FFFD30] placeholder-[#FFFD30]/60'

    const variantStyles = {
        bordered: 'border-2 border-[#FFFD30] focus:border-white',
        borderless: 'border-transparent focus:border-2 focus:border-[#FFFD30]'
    }

    return (
        <div>
            <label className='text-base font-bold text-[#FFFD30]'>
                {label}
            </label>
            <input
                placeholder={placeholder}
                {...props}
                className={`${baseStyles} ${variantStyles[variant]}`}
            />
        </div>
    )
}

export default FormInput
