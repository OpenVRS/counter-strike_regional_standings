### Roster Details<br />
Team Name: Glitch<br />
Roster: Brillo, rud, shaiK, smekk, szejn<br />
Global Rank: [216](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [152]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  692.4<br />
<br />
Final Rank Value (692.4) = Starting Rank Value (646.7) + Head To Head Adjustments (45.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.7
- 400 + ( ( 0.123 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 646.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       69 | 2026-10-02 | BASEMENT BOYS | L   | 1.000      | -            | -                | -                | -         |    -4.02 | Brillo, rud, shaiK, smekk, szejn |
|            4 |       76 | 2026-10-02 | Prestige      | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.125 (0.046)    | 1 (1.000) |    22.02 | Brillo, rud, shaiK, smekk, szejn |
|            3 |       93 | 2026-10-02 | Sashi         | W   | 1.000      | 0.371        | 0.052 (0.019)    | 0.535 (0.198)    | 1 (1.000) |    29.80 | Brillo, rud, shaiK, smekk, szejn |
|            2 |      111 | 2026-10-02 | Voca          | L   | 1.000      | -            | -                | -                | -         |    -1.52 | Brillo, rud, shaiK, smekk, szejn |
|            1 |      126 | 2026-10-02 | BC.Game       | L   | 1.000      | -            | -                | -                | -         |    -0.65 | Brillo, rud, shaiK, smekk, szejn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
