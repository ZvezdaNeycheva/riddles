
const Card = ({ riddle, answer, handleShowAnswer }) => {

    return (
        <div>
            <p>{riddle}</p>
            <button onClick={handleShowAnswer}>{answer}</button>
        </div>


    );
};
export default Card;