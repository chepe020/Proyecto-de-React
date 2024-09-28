import {useState, useEffect} from 'react'
import { reqchiste } from '../service/chiste'

export const RandomChiste  = () => {
    const [chiste, setChiste] = useState('')

    useEffect(() => {
        reqchiste(setChiste)
    }, [])

    return(
        <>
            <div className="text-center">
                <table class="table">
                    <thead>
                        <tr>
                        <th className="table-primary" style={{ fontSize: '24px' }}>Chiste Random</th>
                        </tr>
                    </thead>
                    <tr>
                      <th style={{ fontSize: '15px' }}>{chiste}</th>
                    </tr>
                </table>
                <button onClick={() => reqchiste(setChiste)} className="btn btn-success">Nuevo chiste</button>
            </div>
        </>
    )

}

