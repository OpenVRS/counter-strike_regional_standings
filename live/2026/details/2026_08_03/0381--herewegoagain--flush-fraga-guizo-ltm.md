### Roster Details<br />
Team Name: HereWeGoAgain<br />
Roster: flush, fraga, guizo, Ltm<br />
Global Rank: [381](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [99]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  464.9<br />
<br />
Final Rank Value (464.9) = Starting Rank Value (477.7) + Head To Head Adjustments (-12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.160[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 477.7
- 400 + ( ( 0.040 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 477.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     3307 | 2026-04-03 | BESTIA Academy | L   | 0.388      | -            | -                | -                | -         |    -2.45 | flush, fraga, guizo, Ltm, phc    |
|            8 |     3394 | 2026-04-02 | Fake do Biru   | L   | 0.381      | -            | -                | -                | -         |    -1.28 | flush, fraga, guizo, Ltm, phc    |
|            7 |     3724 | 2026-03-29 | ALKA           | L   | 0.356      | -            | -                | -                | -         |    -2.90 | flush, fraga, GBR-, jvZ, Ltm     |
|            6 |     3731 | 2026-03-29 | Vasco          | L   | 0.354      | -            | -                | -                | -         |    -2.00 | flush, fraga, GBR-, jvZ, Ltm     |
|            5 |     3914 | 2026-03-27 | Players        | L   | 0.340      | -            | -                | -                | -         |    -3.27 | flush, fraga, guizo, jvZ, Ltm    |
|            4 |     4345 | 2026-03-19 | R2             | L   | 0.287      | -            | -                | -                | -         |    -2.54 | flush, fraga, guizo, Ltm, phc    |
|            3 |     4414 | 2026-03-17 | UNO MILLE      | L   | 0.275      | -            | -                | -                | -         |    -1.82 | flush, fraga, guizo, k9izer, Ltm |
|            2 |     4546 | 2026-03-14 | FOLHA AMARELA  | W   | 0.255      | 0.371        | 0.001 (0.000)    | 0.062 (0.006)    | 0 (0.000) |     5.87 | flush, fraga, guizo, k9izer, Ltm |
|            1 |     4594 | 2026-03-13 | Players        | L   | 0.248      | -            | -                | -                | -         |    -2.46 | flush, fraga, guizo, k9izer, Ltm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
