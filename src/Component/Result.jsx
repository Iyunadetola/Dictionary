import React from 'react'

const Result = ({results}) => {
  // console.log({results})
  const {word, phonetic,phonetics, meanings} = results
  return (
    <div>
      <div className="text-left" >
        <div className="flex justify-between py-5 " >
          <h1 className="text-[30px]  " >{word}</h1>
          <p className='text-[20px]' >{phonetic}</p>
        </div>
        {/* <p>{phonetics[0].text}</p> */}
      

        <h1 className="text-[20px] pt-10 opacity-50 " >Meaning</h1>
        <p className="text-left " >{meanings[0].synonyms.map((item, index)=>{
         return <li>{item}</li>
        })}</p>
        <p className='py-5' >{meanings[0].definitions[0].definition}</p>


       <p className='pt-10' >{meanings[0].partOfSpeech}</p> 


        {/* <p>{phonetics.map((items, index)=>{
          return <p>{items}</p>
        })}</p> */}
        {/* <p>{phonetics[1].text}</p> */}

       {/* <p>{meanings[0].definitions[0].map((item, index)=> {
         return <p>{item}</p>
       })}</p> */}
  
      </div>
      <div>


      </div>
    </div>
  )
}

export default Result