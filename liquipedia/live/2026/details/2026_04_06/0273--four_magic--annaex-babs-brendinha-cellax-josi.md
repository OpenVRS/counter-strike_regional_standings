### Roster Details<br />
Team Name: Four Magic<br />
Roster: annaEX, Babs, Brendinha, cellax, josi<br />
Global Rank: [273](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [69]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  609.7<br />
<br />
Final Rank Value (609.7) = Starting Rank Value (610.8) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.159[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 610.8
- 400 + ( ( 0.108 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 610.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.009
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4303 | 2025-11-23 | Dusty Roses   | W   | 0.307      | 0.268        | 0.001 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     4.53 | annaEX, Babs, Brendinha, cellax, josi |
|            5 |     4531 | 2025-11-14 | MIBR Female   | L   | 0.247      | -            | -                | -                | -         |    -1.79 | annaEX, Babs, Brendinha, cellax, josi |
|            4 |     4555 | 2025-11-13 | Atrix Esports | L   | 0.240      | -            | -                | -                | -         |    -2.34 | annaEX, Babs, Brendinha, cellax, josi |
|            3 |     5295 | 2025-10-24 | Atrix Esports | L   | 0.108      | -            | -                | -                | -         |    -1.06 | annaEX, Babs, Brendinha, cellax, josi |
|            2 |     5539 | 2025-10-15 | MIBR Female   | L   | 0.048      | -            | -                | -                | -         |    -0.34 | annaEX, Babs, Brendinha, cellax, josi |
|            1 |     5708 | 2025-10-09 | FURIA Female  | L   | 0.008      | -            | -                | -                | -         |    -0.09 | annaEX, Babs, Brendinha, cellax, josi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($960.34)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-23 |      0.307 | $925.31        | $284.37         |
| 2025-11-16 |      0.259 | $1,982.22      | $513.93         |
| 2025-10-24 |      0.108 | $1,500.00      | $162.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
