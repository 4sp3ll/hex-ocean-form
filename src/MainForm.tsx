import { useState, ChangeEvent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { RootState } from './index'
import httpRequest from './httpRequest'
import { ReduxFormControl, ReduxFormSelect } from './ReduxFormControllers'
import { PizzaInputs, SoupInputs, SandwitchInputs } from './DishTypeInputs'


const FormComponent = () => {

    const [dishType, setDishType] = useState('')
    const [buttonState, setButtonState] = useState(false)

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
            <Form onSubmit={(e) => {
                e.preventDefault();
                httpRequest(store).then(() => {setButtonState(true)})
                }}>

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
                <Form.Group controlId="type">
                    <Field
                    name="type"
                    component={ReduxFormSelect}
                    onChange={handleChange}
                    disabled={dishType ? true : false}
                    required />
                </Form.Group>
                <Row>
                    {handleAdditionalDishInput(dishType)}
                </Row>
            <Row style={{margin: "10vw 0vw",  }}>
                <Col md={{span: 2, offset: 10}}>
                    <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    disabled={buttonState}
                    >
                        {buttonState ? 'GREAT, THANKS!': 'SEND' }
                    </Button>
                </Col>
            </Row>
            </Form>
        </div>
    );
}




export const MainForm = reduxForm({
    form: 'main',
  })(FormComponent);
