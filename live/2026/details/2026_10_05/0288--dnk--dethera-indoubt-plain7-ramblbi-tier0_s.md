### Roster Details<br />
Team Name: DNK<br />
Roster: dethera, indoubt, Plain7, RamBLBi, tier0 s<br />
Global Rank: [288](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [191]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  591.2<br />
<br />
Final Rank Value (591.2) = Starting Rank Value (594.1) + Head To Head Adjustments (-2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.228[<sup>1</sup>](#table2)
- Bounty Collected: 0.153[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.097<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 594.1
- 400 + ( ( 0.097 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 594.1


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
|            5 |     4007 | 2026-05-29 | PCIFIC      | L   | 0.339      | -            | -                | -                | -         |    -1.69 | dethera, indoubt, Plain7, RamBLBi, tier0 s |
|            4 |     4018 | 2026-05-29 | Rune Eaters | L   | 0.338      | -            | -                | -                | -         |    -0.32 | dethera, indoubt, Plain7, RamBLBi, tier0 s |
|            3 |     5428 | 2026-04-19 | Winners     | L   | 0.072      | -            | -                | -                | -         |    -1.17 | dethera, indoubt, Plain7, RamBLBi, tier0 s |
|            2 |     5445 | 2026-04-18 | THE UNIT    | W   | 0.066      | 0.277        | 0.002 (0.000)    | 0.026 (0.000)    | 1 (0.066) |     1.35 | dethera, indoubt, Plain7, RamBLBi, tier0 s |
|            1 |     5448 | 2026-04-18 | Winners     | L   | 0.065      | -            | -                | -                | -         |    -1.07 | dethera, indoubt, Plain7, RamBLBi, tier0 s |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($200.35)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.353 | $500.00        | $176.50         |
| 2026-04-19 |      0.072 | $329.00        | $23.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
