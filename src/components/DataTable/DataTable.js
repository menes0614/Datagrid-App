import React from 'react';
import DataGrid, { Column, Editing, SearchPanel, FilterPanel, Paging, Pager, Popup } from 'devextreme-react/data-grid';
import { SpeedDialAction } from 'devextreme-react/speed-dial-action';
import { data } from '../../data/dataList';
import { Container } from 'react-bootstrap';
import LocalStore from 'devextreme/data/local_store';
import './DataTable.css'

const displayModes = [{ value: 'compact' }]; 
const allowedPageSizes = [2, 4, 'all'];

const store = new LocalStore({   
   data: data,
   name: 'myLocalData',
});

class AddButton extends React.Component {  
  constructor(props) {  
    super(props);
    this.keyProps = store.key();
    this.grid = null;
    this.addRow = this.addRow.bind(this);
  }

  addRow() {  
    this.grid.instance.addRow();
    this.grid.instance.deselectAll();
  }

  render() {

    return (
      
      <div >
        <Container>  
          <DataGrid        
            id="grid"
            dataSource={data}
            keyExpr="ID"
            ref={(ref) => { this.grid = ref; }}
            showBorders={true}
          >
            <Column dataField="Sosyal Medya Linki" />  
            <Column dataField="Sosyal Medya Adı" />
            <Column dataField="Açıklama" />

            <FilterPanel visible={true} texts={""} />      
            <SearchPanel className="searching" visible={true} />   

            <Paging defaultPageSize={"4"} />  
            <Pager
              visible={true}
              allowedPageSizes={allowedPageSizes}
              displayMode={displayModes}
              showPageSizeSelector={true}
              showNavigationButtons={true}
            />
            <Editing mode="popup">
              <Popup
                width={550}
                height={500}
              />
            </Editing>
          </DataGrid>  

          <SpeedDialAction  
            icon="add"
            label="Yeni Hesap Ekle"
            index={1}
            onClick={this.addRow}
          />
        </Container>   
      </div>
    );
  }
}

export default AddButton;
