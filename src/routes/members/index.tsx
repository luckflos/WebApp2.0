import { component$, useStylesScoped$, useStore, useSignal } from '@builder.io/qwik';

import styles from './members.css?inline';
import Modal from '~/components/modal/modal';



export default component$(() => {
    useStylesScoped$(styles);

    const modalVisible = useSignal(false)

    const Mymembers = useStore([{id:'1', rank: 'Captain', name: 'Jack Sparrow', age: '35', address: 'Tortuga', phone: '555-555-5555'}])
    const newMember = {id: '2', rank: '', name: '', age: '', address: '', phone: ''}
    
    
    console.log('rank')
    console.log('address')

 
    return (
        
        
        <div id='gridContainer'>
            
            <button id="open-modal" class="slate-blue" onClick$={() => modalVisible.value = true}>Add Item</button>
            {modalVisible.value && (
                <Modal>
                    <div class='close' onClick$={() => modalVisible.value = false}>close</div>
                    <div id="grid-container">
                        <h2>Enter Your Information</h2>
                        <div id="addMembersFormBorder">
                            <form id='addMembersForm' preventdefault:submit onSubmit$={() =>{
                            }}>
                                <label id="rankedText" for="rank">Qty</label>
                                <select id="rank" name="rank" required>
                                    <option value="" disabled selected>Select your rank</option>
                                    <option value="Captain">Captain</option>
                                    <option value="Co-Captian">Co-Captian</option>
                                    <option value="Cannon Fodder">Cannon Fodder</option>
                                </select>
                                <label for="name">Product</label>
                                <input type="text" id="name" name="name" onInput$={(e) => newMember.name = (e.target as HTMLInputElement).value} required/>
                                <label for="age">Amount</label>
                                <input type="number" id="age" name="age" onInput$={(e) => newMember.age = (e.target as HTMLInputElement).value} required/>
                                <label for="address">Email:</label>
                                <input type="text" id="address" name="address" onInput$={(e) => newMember.address = (e.target as HTMLInputElement).value} required/>
                                <label for="phone">Phone Number:</label>
                                <input type="text" id="phone" name="phone" onInput$={(e) => newMember.phone = (e.target as HTMLInputElement).value} required/>
                                <button type="submit" id="submit-btn" class="slate-blue" preventdefault:submit onClick$={() => { Mymembers.push(newMember); modalVisible.value = false}} >Submit</button>
                            </form>
                        </div>
                    </div>
                </Modal>
            )}
            <div id='scrollBar'>
                <table id="membersTable">
                    <thead>
                            <tr id='titleRow'><th>Qty</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                    </thead>
                    <tbody>
                        {Mymembers.map(member => (
                            <tr key={member.id} id='row'>
                                <td>{member.rank}</td>
                                <td>{member.name}</td>
                                <td>{member.age}</td>
                                <td>{member.address}</td>
                                <td>{member.phone}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>

        </div>
    
    );
});