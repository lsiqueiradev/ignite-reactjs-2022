import * as S from './styles'

export function History() {
  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefas</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 20 minutos</td>
              <td>
                <S.Status statusColor="red">Interrompido</S.Status>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 20 minutos</td>
              <td>
                <S.Status statusColor="yellow">Em andamento</S.Status>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 20 minutos</td>
              <td>
                <S.Status statusColor="green">Concluído</S.Status>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 20 minutos</td>
              <td>
                <S.Status statusColor="yellow">Em andamento</S.Status>
              </td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 20 minutos</td>
              <td>
                <S.Status statusColor="red">Interrompido</S.Status>
              </td>
            </tr>
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
