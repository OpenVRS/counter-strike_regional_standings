### Roster Details<br />
Team Name: DNK<br />
Roster: dethera, indoubt, Plain7, RamBLBi, tier0 s<br />
Global Rank: [293](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [193]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  602.1<br />
<br />
Final Rank Value (602.1) = Starting Rank Value (609.2) + Head To Head Adjustments (-7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 609.2
- 400 + ( ( 0.110 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 609.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2627 | 2026-05-29 | PCIFIC      | L   | 0.523      | -            | -                | -                | -         |    -3.29 | dethera, indoubt, Plain7, RamBLBi, tier0 s |
|            4 |     2638 | 2026-05-29 | Rune Eaters | L   | 0.522      | -            | -                | -                | -         |    -1.11 | dethera, indoubt, Plain7, RamBLBi, tier0 s |
|            3 |     4048 | 2026-04-19 | Winners     | L   | 0.256      | -            | -                | -                | -         |    -3.96 | dethera, indoubt, Plain7, RamBLBi, tier0 s |
|            2 |     4065 | 2026-04-18 | THE UNIT    | W   | 0.250      | 0.277        | 0.002 (0.000)    | 0.037 (0.003)    | 1 (0.250) |     5.18 | dethera, indoubt, Plain7, RamBLBi, tier0 s |
|            1 |     4068 | 2026-04-18 | Winners     | L   | 0.250      | -            | -                | -                | -         |    -3.89 | dethera, indoubt, Plain7, RamBLBi, tier0 s |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($353.29)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.537 | $500.00        | $268.75         |
| 2026-04-19 |      0.257 | $329.00        | $84.55          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
