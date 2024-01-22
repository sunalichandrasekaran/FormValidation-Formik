import { Form, Formik, Field } from "formik";
import { signupValidation } from "./singupValidation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

function App() {
  // const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: signupValidation,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <div className="App">
      <Formik initialValues={initialValues} validationSchema={signupValidation}>
        {({ errors }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <br />
            <Field type="text" name="name"></Field>
            {/* <input
            type="text"
            name="name"
            values={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          /> */}
            <br />
            {errors.name && <small>{errors.name}</small>}
            <br />
            <label htmlFor="email">Email</label>
            <br />
            {/* <input
            type="text"
            name="email"
            values={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          /> */}
            <Field type="text" name="email"></Field>
            <br />
            {errors.email && <small>{errors.email}</small>}
            <br />
            <label htmlFor="password">Password</label>
            <br />
            {/* <input
            type="text"
            name="password"
            values={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          /> */}
            <Field type="text" name="password"></Field>
            <br />
            {errors.password && <small>{errors.password}</small>}
            <br />
            <label htmlFor="cpassword">Confrim Password</label>
            <br />
            {/* <input
            type="text"
            name="cpassword"
            values={values.cpassword}
            onBlur={handleBlur}
            onChange={handleChange}
          /> */}
            <Field type="text" name="cpassword"></Field>
            <br />
            {errors.cpassword && <small>{errors.cpassword}</small>}
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
