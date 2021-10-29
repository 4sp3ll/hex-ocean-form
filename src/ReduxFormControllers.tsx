import { Form } from "react-bootstrap";


export const ReduxFormControl = ({ input, ...props }: any) => {
    return <Form.Control {...props} {...input} />
};

export const ReduxFormSelect = ({ input, ...props }: any) => {

    return (
        <Form.Select {...props} {...input} >
            <option>Choose dish type</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
        </Form.Select>
    )
};