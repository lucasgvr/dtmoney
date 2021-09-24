import { useEffect } from 'react'

import { api } from '../../services/api'

import { Container } from './styles'

export function Transactions() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="income">R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>21/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="outcome">- R$ 3000,00</td>
                        <td>casa</td>
                        <td>17/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}