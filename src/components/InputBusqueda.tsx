'use client'
import { useFormContext, Controller } from 'react-hook-form'
import type { FieldPath, FieldValues } from 'react-hook-form'

interface InputBusquedaProps<TFormValues extends FieldValues> {
    name: FieldPath<TFormValues>
    placeholder?: string
    type?: 'text'
}

const InputBusqueda = <TFormValues extends FieldValues>({ name, placeholder, type = 'text' }: Readonly<InputBusquedaProps<TFormValues>>) => {
    const {
        control,
        formState: { errors },
    } = useFormContext<TFormValues>()

    const error = errors[name]?.message as string | undefined

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        id={name}
                        type={type}
                        autoComplete='off'
                        placeholder={placeholder}
                        {...field}
                        className={`
                            w-full rounded border 
                            px-3 py-2
                            placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-orange-300
                            transition 
                            ${error ? 'border-red-500' : 'border-gray-300'}
                        `}
                    />
                )}
            />
            {error && (
                <p className="fixed text-sm text-red-600">{error}</p>
            )}
        </>
    )
}

export default InputBusqueda;