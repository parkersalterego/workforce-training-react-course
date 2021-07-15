export const Modal = ({ onClose, show, children }) => {
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