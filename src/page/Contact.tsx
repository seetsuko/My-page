import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const Contact = () => {

  const { register, handleSubmit } = useForm()
  const navigation = useNavigate()

  const onSubmit = () => {
    console.log("送信しました")
    navigation("/")
  }

  return(
    <div>
      <h2>Contact</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>件名 <span>※必須</span></label><br/>
          <input 
            type="text" 
            {...register("title",{required:true})}/><br/>
          <label>お名前 <span>※必須</span></label><br/>
          <input 
            type="text" 
            {...register("name",{required:true})}/><br/>
          <label>返信用メールアドレス <span>※必須</span></label><br/>
          <input 
            type="email" 
            {...register("email",{required:true})}/><br/>
          <label>お問い合わせ内容 <span>※必須</span></label><br/>
          <textarea  
            {...register("content",{required:true})}/><br/>
          <button>送信</button>
        </form>
      </div>
    </div>
  )
}