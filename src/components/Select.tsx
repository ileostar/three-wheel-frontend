import React, { useEffect, useRef, useState } from 'react'

interface CustomSelectProps {
  options: string[]
  tips: string
  [key: string]: any
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, tips }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const toggleOptions = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node))
      setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={selectRef} className="relative custom-select w-25 h-9 z-999 cursor-pointer">
      <div className={`${selectedOption ? 'text-black' : 'text-gray'}`} onClick={toggleOptions}>
        {selectedOption || tips}
      </div>
      {isOpen && (
        <ul className="select-options m-1 z-999">
          {options.map((option, index) => (
            <li className={` bg-white-100/50 hover:bg-white-100/90 py-3.5 cursor-pointer ${index === options.length - 1 ? 'rd-b-5' : ''}`} key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
