### Roster Details<br />
Team Name: BMZ<br />
Roster: fury5k, MagnumZ, me1o, rhittacrit, Wonderzce<br />
Global Rank: [296](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [32]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  601.0<br />
<br />
Final Rank Value (601.0) = Starting Rank Value (597.2) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 597.2
- 400 + ( ( 0.104 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 597.2


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
|            5 |     5152 | 2026-03-27 | FengDa        | L   | 0.099      | -            | -                | -                | -         |    -1.42 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |
|            4 |     5242 | 2026-03-25 | FengDa        | W   | 0.085      | 0.333        | 0.003 (0.000)    | 0.039 (0.001)    | 0 (0.000) |     1.47 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |
|            3 |     5370 | 2026-03-23 | Just Swing    | W   | 0.072      | 0.333        | 0.003 (0.000)    | 0.266 (0.006)    | 0 (0.000) |     1.48 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |
|            2 |     5478 | 2026-03-21 | Kaleido       | W   | 0.059      | 0.333        | 0.006 (0.000)    | 0.267 (0.005)    | 0 (0.000) |     1.25 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |
|            1 |     5546 | 2026-03-20 | Vitalem Aerem | W   | 0.052      | 0.333        | 0.000 (0.000)    | 0.183 (0.003)    | 0 (0.000) |     1.07 | fury5k, MagnumZ, me1o, rhittacrit, Wonderzce |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($247.45)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      0.099 | $2,500.00      | $247.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
