import React from 'react'
import {Link} from 'react-router-dom'
import {RankUser} from '../../components/index'
import {MapComponent, BoxWeather} from '../../components/index'

const Rank = () => {
    return (
    <section>
        <BoxWeather/>
        <MapComponent/>
        <RankUser className="modal-rank"/>
    </section>
    )
}

export default Rank