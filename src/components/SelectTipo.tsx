'use client'
import { Fragment } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { TipoFiltro, FILTRO_OPCIONES } from '@/domain/enums/TipoFiltro'

interface SelectTipoProps {
    value: TipoFiltro
    onChange: (v: TipoFiltro) => void
}

const SelectTipo = ({ value, onChange }: SelectTipoProps) => {
    return (
        <Listbox value={value} onChange={onChange}>
            <div className="relative w-50">
                <ListboxButton className="
                    w-full cursor-default rounded-lg py-2 pl-3 text-left
                    shadow-md border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-orange-300
                    transition
                ">
                    <span className="block truncate">
                        {FILTRO_OPCIONES.find(o => o.value === value)?.label}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon className="w-5 h-5 text-gray-400" />
                    </span>
                </ListboxButton>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <ListboxOptions className="
                        absolute mt-1 max-h-60 w-full overflow-auto
                        rounded-md bg-white py-1 text-base shadow-lg
                        ring-1 ring-black ring-opacity-5
                        focus:outline-none
                    ">
                        {FILTRO_OPCIONES.map(option => (
                            <ListboxOption
                                key={option.value}
                                className={({ focus }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${focus ? 'bg-orange-100 text-orange-900' : 'text-gray-900'}`
                                }
                                value={option.value}
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>
                                            {option.label}
                                        </span>
                                        {selected && (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <CheckIcon className="w-5 h-5 text-orange-600" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Transition>
            </div>
        </Listbox>
    )
}

export default SelectTipo;