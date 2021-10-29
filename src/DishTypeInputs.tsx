import { Col, Form } from "react-bootstrap"
import { Field } from 'redux-form';
import { ReduxFormControl } from './ReduxFormControllers'


export const PizzaInputs = () => {
    return (
        <>
        <Col md={6}>
            <Form.Group className="mb-3" controlId="no_of_slices" style={{margin: '16px 0'}}>
                <Form.Label># of slices</Form.Label>
                <Field
                name="no_of_slices"
                component={ReduxFormControl}
                parse={(value: string) => Number(value)}
                type="number"
                required />
                <Form.Text className="text-muted">
                    How many slices?
                </Form.Text>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId="diameter" style={{margin: '16px 0'}}>
                <Form.Label>Diameter</Form.Label>
                <Field
                name="diameter"
                component={ReduxFormControl}
                parse={(value: string) => Number(value)}
                type="number"
                step="0.01"
                required />
            </Form.Group>
        </Col>
        </>
    )
}

export const SoupInputs = () => {
    return (
        <>
        <Col md={6}>
            <Form.Group className="mb-3" controlId="spiciness_scale" style={{margin: '16px 0'}}>
                <Form.Label>Spiciness scale (1-10)</Form.Label>
                <Field
                name="spiciness_scale"
                component={ReduxFormControl}
                parse={(value: string) => Number(value)}
                type="number"
                min="1"
                max="10"
                required />
                <Form.Text className="text-muted">
                    How spicy it is?
                </Form.Text>
            </Form.Group>
        </Col>
        </>
    )
}

export const SandwitchInputs = () => {
    return (
        <>
        <Col md={6}>
            <Form.Group className="mb-3" controlId="slices_of_bread" style={{margin: '16px 0'}}>
                <Form.Label>Number of slices of bread required</Form.Label>
                <Field
                name="slices_of_bread"
                component={ReduxFormControl}
                parse={(value: string) => Number(value)}
                type="number"
                required />
            </Form.Group>
        </Col>
        </>
    )
}