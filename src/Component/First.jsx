import React from 'react'
import shape from '../assets/Shape.png'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { useState, useEffect } from 'react';
import switch1 from '../assets/Group (1).png';
import switch2 from '../assets/Group (2).png';
import rectangle from '../assets/Rectangle.png'
import axios from 'axios'
import Result from './Result';


const First = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [newWord, setNewWord] = useState()
  const [results, setResults] = useState(null)
  const [color, setColor] = useState('white')
  const [selected, setSelected]= useState('Sans Serif')
  const [fontColor, setFontColor] = useState()
  const [fontFamilys, setFontFamilys] = useState()
  
    const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`

    async function search(){
      try{
        const res = await axios.get(`${API_URL}/${newWord}`) ;
        // console.log(res, 'res')
        setResults(res.data[0])

      }
      catch(e){
        console.log(e)
      }
    }
    useEffect(()=>{
        search()})

    function switchColor(color){
      setColor(color)
    }
    function fontColorChange(fontColor){
      setFontColor(fontColor)
    }
    function fontFamilyChange(fontFamilys){
      setFontFamilys(fontFamilys)
    }


    useEffect(()=>{
      document.body.style.backgroundColor = color
    }, [color])

    useEffect(()=>{
      document.body.style.color = fontColor
    }, [fontColor])

    useEffect(()=>{
      document.body.style.fontFamily = fontFamilys
    }, [fontFamilys])

  

  return (
    <>
      <div className='flex justify-between ' >
        <div>
          <img src={shape} alt="" />
        </div>
        <div className='flex gap-5 ' >
          <div className='first-line:' >
            <h3 className='flex' onClick={() => setIsOpen(prev => !prev)} >{selected}
              {isOpen ? (<RiArrowDropDownLine className="text-[2em]" />) : (<RiArrowDropUpLine className='text-[2em]' />)}
            </h3>

            {isOpen && (
            <ul onClick={e=>setSelected(e.target.textContent)} className="cursor-pointer border p-2 " >
              <li onClick={()=>fontFamilyChange('sans-serif')} className="hover:opacity-50" >Sans Serif</li>
              <li onClick={()=>fontFamilyChange('Cambria')} className="hover:opacity-50" >Serif</li>
              <li onClick={()=>fontFamilyChange('monospace')} className="hover:opacity-50" >Mono</li>
            </ul>
            )}

          </div>
          <div>
            <img src={rectangle} alt="" />
          </div>

          <div onClick={() => {setToggle(prev => !prev);start()}} >
            {toggle ? (<img src={switch1} alt="" onClick={()=>{switchColor('white'); fontColorChange('purple')}} />) : (<img src={switch2} alt="" onClick={()=>{switchColor('black'); fontColorChange('yellow')}} />)}
          </div>
        </div>

      </div>

      <input type="search" name="" id="" placeholder=' type here to search' className="border py-2 px-2 mt-4 w-full rounded-lg" onChange={(e)=>setNewWord(e.target.value)}  />
      {/* <button type="submit" className='border' onClick={search} >search</button> */}

    { results && <Result {...{results} } /> }
    </>
  )
}

export default First
