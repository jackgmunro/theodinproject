import React from 'react';
import { useForm } from "react-hook-form";

const ReportForm = (props) => {
  const { register, errors, handleSubmit, formState, reset } = useForm();

  const handleClose = () => {
    reset({
      isSubmitted: false,
    })

    props.onClose()
  }

  return (
    <div>
      <h1 className="text-center accent">What's the reason for flagging?</h1>

      <form className="form" onSubmit={handleSubmit(props.onSubmit)}>

      </form>
    </div>
  )
}


export default ReportForm
