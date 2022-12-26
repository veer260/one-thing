import CustomButton from "./CustomButton";

const OneThing = ({formValue, handleCompletedThings }) => {
    return (
        <>
            <h1 className='text-3xl sm:text-6xl font-bold text-center'>{formValue}</h1>
            <CustomButton 
            handleCompletedThings={handleCompletedThings}
            text='Mark Done'  />
        </>

    )
}

export default OneThing;