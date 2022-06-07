import { Text } from "./Text"
export const PolyMorphicComponent = () => {

    return (
        <div>
            <Text as='h1' size='lg'>Heading</Text>
            <Text as='p' size='md'>Paragraph</Text>
            <Text as='label' htmlFor='someid' size='sm'>Label</Text>
        </div>
    )


}