import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

import { contactStatus } from '../module/redux_module';
import { RootState } from '../redux';
import { useSelector } from 'react-redux';


const ContactList = () => {
  const {contactList, searchKeyword} = useSelector((state:RootState)=>state.contactReducer);
  const [filterContactList, setFilterContactList] = useState<contactStatus[]>([]);

  useEffect(()=> {
    if(searchKeyword !== "") {
      let list:contactStatus[] = contactList.filter((element, index)=> element.name.includes(searchKeyword));

      setFilterContactList(list);
    }else setFilterContactList(contactList);
  },[searchKeyword, contactList])

  return (
    <React.Fragment>
      <SearchBox/>
      total num: {contactList.length},  search num: {filterContactList.length}
      {filterContactList.map((Element) => (
          <ContactItem contact={Element}/>
      ))}
    </React.Fragment>
  )
}

export default ContactList;