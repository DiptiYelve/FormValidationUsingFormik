import React from 'react'
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required username';
    } 
  
    if (!values.remark) {
      errors.remark = 'Required remark';
    } 
  
    if (!values.rating) {
      errors.rating = 'Required rating';
    } 
  
    return errors;
  };

  
function CommentForm({addNewComment}) {
    const formik = useFormik({
        initialValues: {
            username: "",
            remark: "",
            rating: ""
        },
        validate,
        onSubmit: values => {
          addNewComment(values);
        },
      });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Comment Form</h2>
            <label htmlFor="username">Username</label> &nbsp;&nbsp;&nbsp;
            <input type="text" name='username' id='username' placeholder='Enter username...' value={formik.values.username} onChange={formik.handleChange}/>
            {formik.errors.username ? <div style={{color: "red", fontSize: 12}}>{formik.errors.username}</div> : null}  <br /> <br />

            <label htmlFor="remark">Reamrk</label> &nbsp;&nbsp;&nbsp;
            <textarea type="text" name='remark' id='username' placeholder='Enter remark...' value={formik.values.remark} onChange={formik.handleChange} > </textarea>  
            {formik.errors.remark ? <div style={{color: "red", fontSize: 12}}>{formik.errors.remark}</div> : null}<br />

            <label htmlFor="rating">Rating</label> &nbsp;&nbsp;&nbsp;
            <input type="number" name='rating' id='rating' placeholder='Enter rating...' min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} /> 
            {formik.errors.rating ? <div style={{color: "red", fontSize: 12}}>{formik.errors.rating}</div> : null}  <br /> <br />
            <button type="submit">Add Comment</button>
        </form>
    )
}

export default CommentForm