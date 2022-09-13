import axios from 'axios'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { User } from './App'
import { client } from './lib/client'

const withFetchProducts = (WrappedComponent,link,title) => {
    const WithFetchProducts = (props) => {
        const { t } = useTranslation()
        const userData = useContext(User)
        let [index, setIndex] = useState(0)
        const [fetchedProducts, setFetchedProducts] = useState({
            products: [],
            err: '',
            load: true
        })
        useEffect(() => {
           let isCancelled = false
           client.fetch(link,{}).then((data) => {
              if(!isCancelled){
                 setFetchedProducts({products:data,load:false,err:''})
              }
           })
             return () => {
               isCancelled = true;
             }
        },[])

        const nextArrowRef = useRef()
        const prevArrowRef = useRef()

        const nextArrowMbRef = useRef()
        const prevArrowMbRef = useRef()

      let nextProductMb = (e) => {
         if(fetchedProducts.products){
            if(index === fetchedProducts.products.length -1){
               nextArrowMbRef.current.style.pointerEvents = 'none'
            }else{
               setIndex(++index)
               nextArrowMbRef.current.style.pointerEvents = 'all'
            }
         }
      }  

         let prevProductMb = (e) => {
            if(fetchedProducts.products){
               if(index === 0){
                  prevArrowMbRef.current.style.pointerEvents = 'none'
               }else{
                  setIndex(--index)
                  prevArrowMbRef.current.style.pointerEvents = 'all'
               }
            }
         }
      
         let nextProduct = (e) => {
            if(fetchedProducts.products){
               if(index === fetchedProducts.products.length - 3){
                  nextArrowRef.current.style.pointerEvents = 'none'
               }else{
                  setIndex(++index)
                  nextArrowRef.current.style.pointerEvents = 'all'
                  prevArrowRef.current.style.pointerEvents = 'all'
               }
            }
         }
         let prevProduct = (e) => {
            if(fetchedProducts.products){
               if(index === 0){
                  prevArrowRef.current.style.pointerEvents = 'none'
               }else{
                  setIndex(--index)
                  nextArrowRef.current.style.pointerEvents = 'all'
                  prevArrowRef.current.style.pointerEvents = 'all'
               }
            }
         }
      return (
        <WrappedComponent nextProductMb={nextProductMb} prevProductMb={prevProductMb} nextProduct={nextProduct} prevProduct={prevProduct} index={index} setIndex={setIndex} title={t(title)} {...props} userData={userData} nextArrowRef={nextArrowRef} fetchedProducts={fetchedProducts} prevArrowMbRef={prevArrowMbRef} nextArrowMbRef={nextArrowMbRef} prevArrowRef={prevArrowRef} setFetchedProducts={setFetchedProducts} />
      )
    }
    return WithFetchProducts
}

export default withFetchProducts