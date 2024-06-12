import Button from '@mui/material/Button';

interface ButtonUsageProps {
    type: "button" | "submit" | "reset",
    disabled: boolean,
    text: string,
}

const ButtonUsage = (props: ButtonUsageProps) => {
    return <Button type={props.type} disabled={props.disabled} variant="contained">{props.text}</Button>;
}

export default ButtonUsage;