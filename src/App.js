import React from 'react';
import { View, Panel, PanelHeader, Header, Group, Cell, List, PanelHeaderButton, platform, ANDROID } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'artistItems',
			activeArtist: null,
			activeArtistCitites: null,
			arrayArtists: [
				{ id: 1, name: 'Моргенштерн', cities: [<p>"Москва" - 5000000</p>, <p>"Санкт-Петербург" - 1000000</p>, <p>"Казань" - 1000000</p>] },
				{ id: 2, name: 'Дима Билан', cities: [<p>"Москва" - 7000000</p>, <p>"Новосибирск" - 500500</p>, <p>"Казань" - 500000</p>] },
				{ id: 3, name: 'Little Big', cities: [<p>"Москва" - 6000000</p>, <p>"Казань" - 1000000</p>, <p>"Челябинск" - 300000</p>] },
				{ id: 4, name: 'Linkin Park', cities: [<p>"Москва" - 2000000</p>, <p>"Казань" - 1000000</p>, <p>"Санкт-Петербург" - 500000</p>] },
			],
		};
	}

	render() {
		const artistItems = [];
		for (const artist of this.state.arrayArtists.values()) {
			artistItems.push(
				<Cell expandable onClick={() => this.setState({ activePanel: 'artistView', activeArtist: artist.name, activeCities: artist.cities})}>{artist.name}</Cell>,
			);

		}
		return (
			<View activePanel={this.state.activePanel}>
				<Panel id="artistItems">
					<PanelHeader>
						Музыканты
					</PanelHeader>
					<Group>
						<List>
							{artistItems}
						</List>
					</Group>
				</Panel>


				<Panel id="artistView">
					<PanelHeader
						left={
							<PanelHeaderButton onClick={() => this.setState({ activePanel: 'artistItems' })}>
								{osName === ANDROID ? <Icon24Back/> : <Icon28ChevronBack/>}
							</PanelHeaderButton>
						}
					>
						{this.state.activeArtist}
					</PanelHeader>
					<div
						style={{
							padding: '100px 0',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								flex: '0 0 auto',
								color: 'gray',
								textAlign: 'center',
							}}
						>
							{this.state.activeCities}
						</div>
					</div>
				</Panel>
			</View>
		);
	}
}

export default App;