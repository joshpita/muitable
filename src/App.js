import { MTable } from './component/MTable';
import { Grid } from "@material-ui/core";
function App() {
  return (
    <Grid container spacing={0} justify='center' alignItems='center' style={{ minHeight: "80vh" }}>
      <div style={{ height: 250, width: '100%' }}>
        <MTable></MTable>
      </div>
    </Grid>

  );
}
export default App;


