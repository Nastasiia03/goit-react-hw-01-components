import PropTypes from "prop-types";
import { Heads, Th, Tr } from "./transactions.styled";

export const TransactionHistory = ({ transactions }) => {
    return <table>
          <Heads>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
        </Heads>
        <tbody>
            {transactions.map(transaction => (<Tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
            </Tr>))}
        </tbody>
    </table>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}