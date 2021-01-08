import {useState} from 'react';
import {Collapse, Button} from 'react-bootstrap';

function CollaspeFeature(props) {
    const [open, setOpen] = useState(false);

    return(
        <>
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open} block size="sm">
                More Detail
            </Button>
            <Collapse in={open}>
                <div id="collapse-text">
                    {props.body}
                </div>
            </Collapse>
        </>
    );
}

export default CollaspeFeature;
