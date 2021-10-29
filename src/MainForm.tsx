import React, { useState, ChangeEvent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { RootState } from './index'
import httpRequest from './httpRequest'

const ReduxFormControl = ({ input, ...props }: any) => {
    return <Form.Control {...props} {...input} />
};

const ReduxFormSelect = ({ input, ...props }: any) => {

    return (
        <Form.Select {...props} {...input} >
            <option>Choose dish type</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
        </Form.Select>
    )
};

const FormComponent = (props: any) => {

    const { handleSubmit } = props
    const [dishType, setDishType] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDishType(e.target.value)
    }

    const handleAdditionalDishInput = (dishState: string) => {
        if (dishState === 'pizza') return <PizzaInputs/>
        if (dishState === 'soup') return <SoupInputs/>
        if (dishState === 'sandwich') return <SandwitchInputs/>
    }

    const store = useSelector((element: RootState) => element)

    return (
        <div style={{margin: "5vw 15vw" }}>
            <Form onSubmit={handleSubmit}>
                {/* dish name - tex field - required */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Dish name</Form.Label>
                            <Field name="name" component={ReduxFormControl} type="text" required/>
                            <Form.Text className="text-muted">
                                Put your dish name here
                            </Form.Text>
                        </Form.Group>
                    </Col>

                <Col md={6}>
                {/* preparation time - duration field, format: 00:00:00 - required*/}
                <Form.Group className="mb-3" controlId="preparation_time">
                    <Form.Label>Time preparation</Form.Label>
                    <Field
                    name="preparation_time"
                    component={ReduxFormControl}
                    type="time"
                    step="1"
                    required />
                    <Form.Text className="text-muted">
                        How long it will take to prepare?
                    </Form.Text>
                </Form.Group>
                </Col>
                </Row>
                {/* dish type - select field - required */}
                <Form.Group controlId="type">
                    <Field
                    name="type"
                    component={ReduxFormSelect}
                    onChange={handleChange}
                    disabled={dishType ? true : false}
                    required />
                </Form.Group>
                <Row>
                    <Col md={6}>
                        {handleAdditionalDishInput(dishType)}
                    </Col>
                </Row>

                {/* after dish type is selected, conditional:
                    for pizza:
                    no_of_slices - # of slices (number field)
                    diameter - diameter (float field)
                    for soup:
                    spiciness_scale - spiciness scale (1-10)
                    for sandwich:
                    slices_of_bread - number of slices of bread required (number field) */}

            <Row style={{margin: "15vw 0vw",  }}>
                <Col xs={{span: 2, offset: 10}}>
                    <Button
                    variant="primary"
                    type="submit"
                    onClick={() => httpRequest(store).then(res => console.log(res))}>
                        SEND
                    </Button>
                </Col>
            </Row>
            </Form>
        </div>
    );
}


export const PizzaInputs = () => {
    return (
        <>
        <Form.Group className="mb-3" controlId="no_of_slices" style={{margin: '16px 0'}}>
            <Form.Label># of slices</Form.Label>
            <Field
            name="no_of_slices"
            component={ReduxFormControl}
            parse={(value: string) => Number(value)}
            type="number"
            required />
            <Form.Text className="text-muted">
                How much slices?
            </Form.Text>
        </Form.Group>
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
        </>
    )
}

export const SoupInputs = () => {
    return (
        <>
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
        </>
    )
}

export const SandwitchInputs = () => {
    return (
        <>
        <Form.Group className="mb-3" controlId="slices_of_bread" style={{margin: '16px 0'}}>
            <Form.Label>Number of slices of bread required</Form.Label>
            <Field
            name="slices_of_bread"
            component={ReduxFormControl}
            parse={(value: string) => Number(value)}
            type="number"
            required />
        </Form.Group>
        </>
    )
}

export const MainForm = reduxForm({
    form: 'main',
  })(FormComponent);
