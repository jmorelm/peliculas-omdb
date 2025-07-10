'use client'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formBusquedaSchema, FormBusqueda } from '@/schemas/formBusqueda'
import SelectTipo from './SelectTipo'
import InputBusqueda from './InputBusqueda'
import { tw } from 'lib/tw'

interface BarraBusquedaProps {
  onSearch: (query: string, type: '' | 'movie' | 'series') => void
}

const BarraBusqueda = ({ onSearch }: BarraBusquedaProps) => {
  const methods = useForm<FormBusqueda>({
    resolver: zodResolver(formBusquedaSchema),
    defaultValues: { query: '', type: '', page: 1 },
  })

  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting }
  } = methods

  const queryValue = watch('query')

  const submitHandler = ({ query, type }: FormBusqueda) => {
    onSearch(query, type)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-7xl mx-auto px-4"
      >
        <div className="flex-grow">
          <InputBusqueda<FormBusqueda>
            name="query"
            placeholder="Escribe un título..."
          />
        </div>

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <SelectTipo
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting ?? !queryValue.trim()}
          className={`${tw.backgroundColorBase} w-20 py-2 rounded hover:bg-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label="Buscar películas o series"
        >
          {isSubmitting ? 'Buscando…' : 'Buscar'}
        </button>
      </form>
    </FormProvider>
  )
}

export default BarraBusqueda;