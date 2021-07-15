export const Modal = ({show, onClose, children }) => {
    return show
        ? (
            <div>
                { children }
                <button
                    onClick={onClose}
                >Close</button>
            </div>
        )
       : null;
}