const MusicTable = (props) => {
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>artist</th>
                        <th>album</th>
                        <th>release_date</th>
                        <th>genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.ParentDrop.map((entry)=>{
                        return (
                        <tr key={entry}>
                        <td>{entry.title}</td>
                        <td>{entry.artist}</td>
                        <td>{entry.album}</td>
                        <td>{entry.release_date}</td>
                        <td>{entry.genre}</td>
                        </tr>    
                        );
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default MusicTable;