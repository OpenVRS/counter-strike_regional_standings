### Roster Details<br />
Team Name: OKSUCC<br />
Roster: jeyN, moz, Swaggy, wfn<br />
Global Rank: [378](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [233]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  412.6<br />
<br />
Final Rank Value (412.6) = Starting Rank Value (400.5) + Head To Head Adjustments (12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.054
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      855 | 2026-05-29 | Dripmen          | L   | 0.905      | -            | -                | -                | -         |    -5.57 | jeyN, moz, N0R1, Swaggy, wfn        |
|            5 |     1022 | 2026-05-25 | SSSghoul         | W   | 0.878      | 0.265        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.19 | jeyN, moz, N0R1, Swaggy, wfn        |
|            4 |     2993 | 2026-04-01 | Ex-Zero Tenacity | L   | 0.517      | -            | -                | -                | -         |    -1.31 | Dimitryyyyy, jeyN, moz, Swaggy, wfn |
|            3 |     3088 | 2026-03-31 | IDoPieca         | W   | 0.510      | 0.384        | 0.000 (0.000)    | 0.052 (0.010)    | 0 (0.000) |    10.50 | Dimitryyyyy, jeyN, moz, Swaggy, wfn |
|            2 |     3238 | 2026-03-29 | RUSTEC           | L   | 0.497      | -            | -                | -                | -         |    -1.33 | Dimitryyyyy, jeyN, moz, Swaggy, wfn |
|            1 |     4619 | 2026-03-02 | CTRL Esports     | L   | 0.319      | -            | -                | -                | -         |    -3.40 | jeyN, Mad, moz, Swaggy, wfn         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
