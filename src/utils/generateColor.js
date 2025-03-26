const HEX_BASE_COLOR = parseInt('ffffff', 16);

export default function generateColor(){
    return (
        `#${Math.floor(Math.random() * HEX_BASE_COLOR).toString(16)}`
    );
}