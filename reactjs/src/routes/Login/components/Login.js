import React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div>
      <h2 className='display-4 text-center'>Login</h2>
      <Formik
        initialValues={{ taiKhoan: '', matKhau: '' }}
        // validate={values => {
        //   const errors = {};
        //   if (!values.taiKhoan) {
        //     errors.taiKhoan = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.taiKhoan)
        //   ) {
        //     errors.taiKhoan = 'Invalid taiKhoan address';
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values, history, setSubmitting))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <input
                type="email"
                name="taiKhoan"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taiKhoan}
                className="form-control"
                placeholder='taiKhoan'
              />
              {errors.taiKhoan && touched.taiKhoan && <small id="helpId" class="form-text text-muted">{errors.taiKhoan}</small>}
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                name="matKhau"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
                className="form-control"
                placeholder='matKhau'
              />
              {errors.matKhau && touched.matKhau && <small id="helpId" class="form-text text-muted">{errors.matKhau}</small>}
            </div>

            <button className='btn btn-success w-100' type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
