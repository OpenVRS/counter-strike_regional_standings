### Roster Details<br />
Team Name: BMZ<br />
Roster: fury5k, MagnumZ, me1o, rhittacrit, Wonderzce<br />
Global Rank: [292](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [31]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  602.4<br />
<br />
Final Rank Value (602.4) = Starting Rank Value (598.2) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.233[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 598.2
- 400 + ( ( 0.104 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 598.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5124 | 2026-03-27 | FengDa        | L   | 0.104      | -            | -                | -                | -         |    -1.50 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |
|            4 |     5214 | 2026-03-25 | FengDa        | W   | 0.091      | 0.333        | 0.003 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     1.56 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |
|            3 |     5342 | 2026-03-23 | Just Swing    | W   | 0.078      | 0.333        | 0.003 (0.000)    | 0.267 (0.007)    | 0 (0.000) |     1.58 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |
|            2 |     5450 | 2026-03-21 | Kaleido       | W   | 0.064      | 0.333        | 0.006 (0.000)    | 0.267 (0.006)    | 0 (0.000) |     1.37 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |
|            1 |     5518 | 2026-03-20 | Vitalem Aerem | W   | 0.057      | 0.333        | 0.000 (0.000)    | 0.184 (0.004)    | 0 (0.000) |     1.19 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($261.11)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      0.104 | $2,500.00      | $261.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
